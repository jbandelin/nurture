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
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('batterystatus', this.critterHealth, false);
        document.addEventListener('batterylow', this.critterLow, false);
        docutment.addEventListener('batterycritical', this.critterCrit, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        app.receivedEvent('deviceready');
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
    critterHealth: function(info){
        var status = "Battery Status is: ";
        status += info.level;
        this.drawStatus(status);
    }, 

    //The critter's health is low!
    critterLow: function(info){
        var status = "Your critter's health is getting low :( Current battery level is: ";
        status += info.level;
        this.drawStatus(status);
    }, 

    //The critter's health is critically low! 
    critterCrit: function(info){
        var status = "Your critter's health is critically low :( plug in your phone before he gets sick! Current battery level is: ";
        status += info.level;
        this.drawStatus(status);
    },

    //Temp, log the current status in the health div
    drawStatus: function(status){
        healthDiv = document.getElementById("critter_health");
        healthDiv.innerHTML = status;
    }
};
