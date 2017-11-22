'use_strict';

let $$ = require('./prepare.js');
let log = require('../common/logger')('blockchain.instantiate_cc');

$$.cli.init().then(() => {
	return $$.cli.prepareChannel();
}).then(() => {
	log.info('successfully prepared channel.');
	return $$.cli.instantiate('soila_chain', '1', ['init', 'a', '1']);
}).then((ret) => {
	log.info('successfully instantiated chaincode');
	$$.cli.term();
}).catch((err) => {
	log.error('failed to instantiate chaincode:' + err);
	$$.cli.term();
});


