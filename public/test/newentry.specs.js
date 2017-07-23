
import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import NewEntry from '../src/components/newentry'

describe('New Lost And Found Entry', ()=> {
	let wrapper, axiosStub;
	beforeEach(()=> {
		wrapper = mount(<NewEntry />)
		axiosStub = sinon.stub(axios, 'post');
	})
	
	it('should render the New Entry Component', () => {
		expect(wrapper.find('.page')).to.exist;
	})
	

});