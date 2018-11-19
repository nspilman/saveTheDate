const ipc=require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'world';
ipc.config.retry= 1500;
ipc.config.rawBuffer=true;
ipc.config.encoding='hex';

ipc.serve(
    function(){
        ipc.server.on(
            'connect',
            function(socket){
                ipc.server.emit(
                    socket,
                    [0xaa]
                );
            }
        );

        ipc.server.on(
            'data',
            function(data,socket){
                ipc.log('got a message', data);
                ipc.server.emit(
                    socket,
                    [0x0d,0xee]
                );
            }
        );
    }
);

ipc.server.start();