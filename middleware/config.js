export default function ConfigMiddleware(ctx) {
  console.log(`ConfigMiddleware | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);
}
