const initMsw = async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('../mocks/server');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('../mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
    window.worker = worker;
  }
};

export default initMsw;
