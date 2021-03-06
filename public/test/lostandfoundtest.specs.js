import 'jsdom-global/register';
import React from 'react';
import LostAndFoundEntry from "../src/components/lostandfoundentry";
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import LostAndFound from '../src/components/lostandfound';
import axios from 'axios';


describe("Lost and Found", function () {
	let wrapper, axiosStub;
	
	beforeEach((done) => {
		axiosStub = sinon.stub(axios, 'get');
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
		wrapper = mount(<LostAndFound />)
		// shallowWrapper = shallow(<LostAndFound/>);
		return Promise.resolve()
		done()
	});
	
	afterEach(() => {
		axios.get.restore()
	});
	it('should create object', () => {
		expect(LostAndFound.prototype).to.not.be.null;
	});
	
	it('links to new entry page', () => {
		expect(
			wrapper.find('a').prop('href')
		).equal('/newentry')
	});
	
	it('should call axios get request to "/getallentries" on component mount', () => {
		expect(axiosStub.calledWith('/getallentries')).to.be.true
	});
	
	it('should call axios once on component mount', () => {
		expect(axiosStub.calledOnce).to.be.true
	});
	
	it('has class entries', () => {
		setTimeout(()=>{
			expect(wrapper.find('.page').childAt(2).hasClass('entries')).to.equal(true);
			
		}, 300)
	});

});