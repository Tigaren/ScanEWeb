export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601e5d23a96f4c903e17c0f3',
                  title: 'Sanity Studio',
                  name: 'scaneweb-studio',
                  apiId: '4951b1da-943e-4346-be4e-ea30d9ca23e5'
                },
                {
                  buildHookId: '601e5d230aa75d8d5694c905',
                  title: 'Landing pages Website',
                  name: 'scaneweb',
                  apiId: '4d02aacc-d070-42af-af1c-5950bea7b750'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tigaren/ScanEWeb',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scaneweb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
