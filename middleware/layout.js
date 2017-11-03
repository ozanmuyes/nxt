export default function LayoutMiddleware(ctx) {
  console.log(`LayoutMiddleware | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);
}
