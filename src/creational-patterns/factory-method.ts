abstract class ReportDocument {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
  // shared method
  abstract generateReport(): void;
}

class PDFDocument extends ReportDocument {
  generatePDFService?: string;

  constructor(content: string, generatePDFService?: string) {
    super(content);
    this.generatePDFService = generatePDFService || 'some service';
  }

  generateReport(): void {
    console.log('Generating PDF report with:', this.content);
  }
}

class WordDocument extends ReportDocument {
  generateReport(): void {
    console.log('Generating Word report with:', this.content);
  }
}

class ExelDocument extends ReportDocument {
  generateReport(): void {
    console.log('Generating Excel report with:', this.content);
  }
}

// ================================

// Issue: we must modify this function whenever a new report type is added.
function exportReport(type: string, content: string) {
  let report: ReportDocument | null = null;

  if (type === 'pdf') {
    report = new PDFDocument(content);
  } else if (type === 'word') {
    report = new WordDocument(content);
  } else if (type === 'excel') {
    report = new ExelDocument(content);
  }

  if (!report) {
    throw new Error('Invalid report type');
  }

  report.generateReport();
}

// if we don't use switch, we need to call the concrete class directly (ex: new PDFDocument())
const pdfReport = new PDFDocument('Hello World');
pdfReport.generateReport();

// Issue: with dependency injection (eg: 10 of them). It would be complex to copy + paste the code for each report type.
const generatePDFService = 'some service';
const pdfReport2 = new PDFDocument('Hello World', generatePDFService);
pdfReport2.generateReport();

// ================================

// Factory Method Pattern: creator
// the idea is to avoid using the concret class directly  (ex: new PDFDocument())
// it's like a wrapper for the concrete class

interface ReportFactory {
  createReport(content: string): ReportDocument;
}

class PDFReportFactory implements ReportFactory {
  generatePDFService?: string;

  // we can hide the external dependency (generatePDFService) from the client
  constructor(generatePDFService?: string) {
    this.generatePDFService = generatePDFService || 'some service';
  }

  createReport(content: string): ReportDocument {
    return new PDFDocument(content, this.generatePDFService); // here we encapsulate the object creation logic
  }
}

class WordReportFactory implements ReportFactory {
  createReport(content: string): ReportDocument {
    return new WordDocument(content);
  }
}

class ExcelReportFactory implements ReportFactory {
  createReport(content: string): ReportDocument {
    return new ExelDocument(content);
  }
}

// ================================

// Usage

const pdfReportFactory = new PDFReportFactory();
pdfReportFactory.createReport('Hello World');

const wordReportFactory = new WordReportFactory();
wordReportFactory.createReport('Hello World');

const excelReportFactory = new ExcelReportFactory();
excelReportFactory.createReport('Hello World');

// continue
/// https://chatgpt.com/c/67fdfe12-8b24-800e-b8de-c80c1c4bdc50
