export default function PageAsyncMiddleware(ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`PageAsyncMiddleware | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);

      resolve();
    }, 100);
  });
}
