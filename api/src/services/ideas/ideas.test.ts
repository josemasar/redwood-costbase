import { ideas, idea, createIdea, updateIdea, deleteIdea } from './ideas'
import type { StandardScenario } from './ideas.scenarios'

describe('ideas', () => {
  scenario('returns all ideas', async (scenario: StandardScenario) => {
    const result = await ideas()

    expect(result.length).toEqual(Object.keys(scenario.idea).length)
  })

  scenario('returns a single idea', async (scenario: StandardScenario) => {
    const result = await idea({ id: scenario.idea.one.id })

    expect(result).toEqual(scenario.idea.one)
  })

  scenario('creates a idea', async () => {
    const result = await createIdea({
      input: {
        product: 'String',
        title: 'String',
        description: 'String',
        value: 6858402,
        author: 'String',
        vendor: 'String',
      },
    })

    expect(result.product).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.value).toEqual(6858402)
    expect(result.author).toEqual('String')
    expect(result.vendor).toEqual('String')
  })

  scenario('updates a idea', async (scenario: StandardScenario) => {
    const original = await idea({ id: scenario.idea.one.id })
    const result = await updateIdea({
      id: original.id,
      input: { product: 'String2' },
    })

    expect(result.product).toEqual('String2')
  })

  scenario('deletes a idea', async (scenario: StandardScenario) => {
    const original = await deleteIdea({ id: scenario.idea.one.id })
    const result = await idea({ id: original.id })

    expect(result).toEqual(null)
  })
})
