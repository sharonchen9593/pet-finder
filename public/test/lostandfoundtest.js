
import 'jsdom-global/register'
import React from 'react';
var expect = require('chai').expect
var assert = require('assert')
var mount = require('enzyme').mount
var shallow = require('enzyme').shallow
import LostAndFound from '../src/components/lostandfound'

describe("Lost and Found", function() {
  it('should create object', () => {
    let wrapper = mount(<LostAndFound />)
    expect(LostAndFound.prototype).to.not.be.null;
  })

  it('links to new entry page', () => {
    let wrapper = shallow(<LostAndFound/>);
    expect(
      wrapper.find('a').prop('href')
      ).equal('/newentry')
  })

})