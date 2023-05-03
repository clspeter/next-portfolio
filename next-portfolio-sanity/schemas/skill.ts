type RuleType = {
    required: () => RuleType
    min: (min: number) => RuleType
    max: (max: number) => RuleType
    length: (exactLength: number) => RuleType
    greaterThan: (gt: number) => RuleType
    uri: (options: { scheme: string[] }) => RuleType
}

export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: "Title of skill",
            type: 'string',
        },
        {
            name: 'progress',
            title: 'Progress',
            type: 'number',
            description: 'Progress of skill form 0 to 100',
            validation: (Rule: RuleType) => Rule.min(0).max(100)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
    ]
}