export default {
    name: 'experince',
    title: 'Experince',
    type: 'document',
    fields: [
        {
            name: 'jobTitle',
            title: 'Jobtitle',
            type: 'string'
        },
        {
            name: 'companyImage',
            title: 'Company Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'company',
            title: 'Company',
            type: 'text',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date',
        },
        {
            name: 'dataEnded',
            title: 'DateEnded',
            type: 'date',
        },
        {
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean',
        },
        {
            name: 'techonologies',
            title: 'Techonologies',
            type: 'boolean',
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [
                { type: "string" }]

        },
    ]
}