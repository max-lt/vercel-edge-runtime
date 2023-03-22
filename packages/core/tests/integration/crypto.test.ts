import { EdgeRuntime } from '../../src/edge-runtime'

test('crypto.subtle.digest returns an ArrayBuffer', async () => {
  const runtime = new EdgeRuntime()

  async function fn() {
    const digest = await crypto.subtle.digest(
      'SHA-256',
      crypto.getRandomValues(new Uint8Array(32))
    )
    return digest
  }

  const fromContext = runtime.evaluate(`({ ArrayBuffer })`)

  const digest = await runtime.evaluate(`(${fn})()`)
  expect(digest).toBeInstanceOf(fromContext.ArrayBuffer)
})
