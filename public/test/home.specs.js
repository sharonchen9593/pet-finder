import 'jsdom-global/register';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import Home from '../src/components/home';
import $ from 'jquery';

describe("Home Page", () => {
	var wrapper, stub;
	beforeEach(() => {
		wrapper = shallow(<Home />)
		stub = sinon.stub($, "get")
		//stub.resolve("<div id='welcome-pet-total'>111,000</div><div id='welcome-shelter-total'>11,000</div>")
	});
	
	afterEach(() => {
		$.get.restore()
	})
	
	it('should render component', () => {
		expect(Home.prototype).to.not.be.null
	})
	
	it('should render adopt a best friend div', () => {
		expect(wrapper.find(".homebg").exists()).to.be.true
	})
	
	
	it('should render map component', () => {
		expect(wrapper.find(".homemap").exists()).to.be.true
	})
	
	it('should render banner at the bottom', () => {
		expect(wrapper.find(".banner").exists()).to.be.true
	})
	
	it('should render 7 banner items at the bottom', () => {
		expect(wrapper.find(".banner").children()).to.have.length(7)
	})
	
	// / it('should call API on component mount', () => {
	// 	expect(stub.calledWith('https://cors-anywhere.herokuapp.com/https://www.petfinder.com/')).to.equal(true)
	// })

	
	describe("banner links", ()=> {
		
		it('first 2 items should link to /shelter', () => {
			expect(wrapper.find(".banner").childAt(0).prop('href')).equal('/shelters')
			expect(wrapper.find(".banner").childAt(1).prop('href')).equal('/shelters')
		});
		
		it('third item should link to /random', () => {
			expect(wrapper.find(".banner").childAt(2).prop('href')).equal('/random')
		});
		
		it('fourth item should link to /lostandfound', () => {
			expect(wrapper.find(".banner").childAt(3).prop('href')).equal('/lostandfound')
		});
		
		it('fifth item should link to /donate', () => {
			expect(wrapper.find(".banner").childAt(4).prop('href')).equal('/donate')
		});
		
		it('sixth item should link to /login', () => {
			expect(wrapper.find(".banner").childAt(5).prop('href')).equal('/login')
		});
		
		it('seventh item should link to /signup', () => {
			expect(wrapper.find(".banner").childAt(6).prop('href')).equal('/signup')
		});
		
	})
	
})
