'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var thoughtcore = require('@thoughtnetwork/thoughtcore-lib');
var utils = require('../utils');
var $ = thoughtcore.util.preconditions;
var _ = thoughtcore.deps._;
var BufferUtil = thoughtcore.util.buffer;
var BufferReader = thoughtcore.encoding.BufferReader;

/**
 * A message to confirm that a connection is still valid.
 * @param {Number} arg - A nonce for the Ping message
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function SyncstatuscountMessage(arg, options) {
  Message.call(this, options);
  this.command = 'ssc';
}
inherits(SyncstatuscountMessage, Message);

SyncstatuscountMessage.prototype.setPayload = function(payload) {
    var parser = new BufferReader(payload);
    this.nonce = parser.read(8);

};

SyncstatuscountMessage.prototype.getPayload = function() {
    return this.nonce;
};

module.exports = SyncstatuscountMessage;
