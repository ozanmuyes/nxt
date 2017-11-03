export default function LayoutAsyncMiddleware(ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`LayoutAsyncMiddleware | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);

      resolve();
    }, 100);
  });
}
