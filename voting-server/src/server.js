import Server from 'socket.io';

export function startServer(store) {
  const io = new Server().attach(8090);
  //.subscribe called when state tree is modified by action
  //io.emit sends state to all clients
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
}