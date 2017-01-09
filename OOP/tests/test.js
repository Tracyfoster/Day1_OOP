var myApp = require('../app/oop.js');

(function(){
  'use strict';
  describe("Phone Class: Creates a phone", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var tecno = new phone('Tecno');
      expect(typeof tecno).toEqual(typeof {});
      expect(tecno instanceof phone).toBeTruthy();
    });

    it("The phone should be called 'Samsung' if no name is passed as a parameter", function() {
      var mob = new phone();
      expect(mob.name).toEqual('Samsung');
      expect(mob.os).toBe('Andriod');
    });

    it("The phone name and OS should be a property of the Phone", function() {
      var nokia  = new phone('Nokia', 'Windows');
      expect(nokia.name).toBe('Nokia');
      expect(nokia.os).toBe('Windows');
    });



  });
})();