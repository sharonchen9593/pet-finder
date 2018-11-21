import 'jsdom-global/register'
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Donate from '../src/components/donate';
import axios from 'axios';
import sinon from 'sinon'


describe("Donation Page", () => {
	var wrapper, axiosStub;
	beforeEach(() => {
		axiosStub = sinon.stub(axios, 'get');
		axiosStub.resolves({data:[{
			email: 'hello@ex.com',
			phoneNumber: "123-123-1234",
			suppliesOrFunds: "supplies",
			title: "Example",
			description: "example",
			imageStr: "12354356",
			location: "SF",
			venmo: "esdafsdf",
			paypal: "123@wer.com",
			goal: 1234,
			donationsReceived: 1234,
			id: 12345
		}]})
		wrapper = mount(<Donate/>)
		//return Promise.resolve()
	});
	
	afterEach(()=>{
		axios.get.restore();
	})
	
	it("should render component to the page", () => {
		expect(Donate.prototype).to.not.be.null
	})
	
	it("axios should be called on component mount", ()=> {
		expect(axiosStub.calledOnce).to.be.true
	})
	
	// it("should have entry from div from fundraiserEntry component", () => {
	// 	console.log(wrapper.find('.page').hasClass('l'))
	// 	expect(wrapper.find('.page').hasClass('entry')).to.be.true
	// })
});