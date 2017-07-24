
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
	let wrapper, component, axiosStub;
	beforeEach(()=> {
		axiosStub = sinon.stub(axios, 'post')
		axiosStub.resolves({data:[{
			email: "email@email.com",
			phoneNumber: "555-555-5555",
			lostOrFound: "lost",
			imageStr: "123",
			location: "SF",
			date: "1/1/2017",
			petName: "hello",
			animal: "dog",
			breed: "husky",
			description: "lost on sat"
		}]});
		wrapper = mount(<NewEntry />)
		
	})
	
	afterEach(() => {
		axios.post.restore()
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
	
	// it('should submit a post request on submit event', () => {
	//
	// 	expect(axiosStub.calledWith('/submitnewentry')).to.be.true
	// 	// axiosStub.verify
	// })
});