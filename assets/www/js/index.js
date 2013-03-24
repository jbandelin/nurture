/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.triggerMockEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        // debugger;
        // document.addEventListener('deviceready', this.onDeviceReady, false);
        //window.addEventListener('batterystatus', this.critterHealth, false);
        //$(window).on('batterystatus', function() {
         //   console.log("battery status change ")
        //});
        $(window).on('batterystatus', this.critterHealth)
        $(window).on('batterylow', this.critterLow);

        $(window).on('batterycritical', this.critterCrit)

        //document.addEventListener('batterylow', this.critterLow, false);
        //document.addEventListener('batterycritical', this.critterCrit, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        //app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    //Update the critter Health
    critterHealth: function(event){
        var info = event.info
        var status = "Your critter's health is at: ";
        status += info.level;
        status += '%'
        app.drawStatus(status);
    }, 

    //The critter's health is low!
    critterLow: function(event){
        var info = event.info
        var status = "Your critter's health is getting low: ";
        status += info.level;
        status += "%"
        console.log(status)
        app.drawStatus(status);
    }, 

    //The critter's health is critically low! 
    critterCrit: function(event){
        var info = event.info
        var status = "Your critter's health is critically low at: ";
        status += info.level;
        status += "%"
        console.log(status);
        app.drawStatus(status);
    },

    //Temp, log the current status in the health div
    drawStatus: function(status){
        healthDiv = document.getElementById("critter_health");
        healthDiv.innerHTML = status;
    },
    triggerMockEvents: function(){
        var event = $.Event('batterystatus');
        event.info = {
            level: 50,
        };
        setTimeout(function(){
            $(window).trigger(event);
        }, 5000);


        var event2 = $.Event('batterylow');
        event2.info = {
            level: 15
        };
        setTimeout(function(){
            $(window).trigger(event2);
        }, 10000);

        var event3 = $.Event('batterycritical');
        event3.info = {
            level: 5
        };
        setTimeout(function(){
            $(window).trigger(event3);
        }, 15000);
    }
};
