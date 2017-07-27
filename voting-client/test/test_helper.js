//import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

//Had to remove from tutorial code and replace with changes to get it to work with newer version of jsdom
//const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
//const win = doc.defaultView;

global.document = dom.window.document;
global.window = dom.window;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);