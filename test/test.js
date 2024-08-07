import { expect } from 'chai';
import { addTask } from '../app.js';
import { JSDOM } from 'jsdom';

describe("adding task",function(){
    let document;
    let list;

    beforeEach(() => {
        const dom = new JSDOM('<!doctype html><html><body><ul id="todo-list"></ul></body></html>');
        document = dom.window.document;
        list = document.getElementById('todo-list');
    });
    it('should add a task to the list', () => {
        const task = 'Test Task';
        addTask(task, list);

        const items = list.getElementsByTagName('li');
        expect(items.length).to.equal(1);
        expect(items[0].textContent).to.include(task);
    });

})