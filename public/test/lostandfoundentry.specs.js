import {mount} from 'enzyme';
import React from 'react';
import {expect} from 'chai';
import LostAndFoundEntry from '../src/components/lostandfoundentry';

describe('Lost And Found Entry', () => {
	let wrapper, axiosStub;
	beforeEach(() => {
		wrapper = mount(<LostAndFoundEntry/>)
	})
});