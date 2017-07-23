import 'jsdom-global/register'
import React from 'react';
import LostAndFoundEntry from "../src/components/lostandfoundentry";
var expect = require('chai').expect
var mount = require('enzyme').mount
var shallow = require('enzyme').shallow
var sinon = require('sinon')
import LostAndFound from '../src/components/lostandfound'
var axios = require('axios')

describe("Lost and Found", function () {
	let wrapper, shallowWrapper, axiosStub
	
	beforeEach(() => {
		axiosStub = sinon.stub(axios, 'get')
		axiosStub.resolves({data:{
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
		}})
		wrapper = mount(<LostAndFound />)
		shallowWrapper = shallow(<LostAndFound/>);
		
		
	})
	
	afterEach(() => {
		axios.get.restore()
	})
	it('should create object', () => {
		expect(LostAndFound.prototype).to.not.be.null;
	})
	
	it('links to new entry page', () => {
		expect(
			shallowWrapper.find('a').prop('href')
		).equal('/newentry')
	})
	
	it('should call axios on component mount', () => {
		expect(axiosStub.calledWith('/getallentries')).to.be.true
	})
	

})