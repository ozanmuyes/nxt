export default function ConfigAsyncMiddleware(ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`ConfigAsyncMiddleware | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);

      resolve();
    }, 100);
  });
}
