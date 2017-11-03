export default function PageMiddleware(ctx) {
  console.log(`PageMiddleware | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);
}
