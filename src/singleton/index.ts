import {Singleton} from './singleton';

const intanceOne = Singleton.getInstance();

intanceOne.add();
intanceOne.add();
intanceOne.add();

intanceOne.getCounter();

const intanceTwo = Singleton.getInstance();
intanceOne.add();
intanceTwo.getCounter();
