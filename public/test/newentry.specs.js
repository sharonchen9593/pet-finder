
import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import 'chai-jquery';
import {mount} from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import NewEntry from '../src/components/newentry'
import {
	Simulate,
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

describe('New Lost And Found Entry', ()=> {
	let wrapper, component;
	beforeEach(()=> {
		wrapper = mount(<NewEntry />)
		component = renderIntoDocument(<NewEntry />)
		
	})
	
	it('should render the New Entry Component', () => {
		expect(NewEntry.prototype).to.not.be.null;
	})

	it('should have title of page as h1 tag', () => {
		expect(wrapper.find('h1')).to.have.length(1)
	})

	it('should have a text area for the description', () =>{
		expect(wrapper.find('textarea')).to.have.length(1)
	})
	
	it('should have a submit button', () =>{
		expect(wrapper.find('button').exists()).to.be.true;
	})
});