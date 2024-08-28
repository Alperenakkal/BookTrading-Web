const people = [
    {
      name: 'Eyüpcan Ekiz',
      role: 'Yazılım Geliştirici',
      imageUrl:
        'https://avatars.githubusercontent.com/u/101872697?v=4',
    },
    {
      name: 'Alperen Akal',
      role: 'Yazılım Geliştirici',
      imageUrl:
        'https://avatars.githubusercontent.com/u/69604318?v=4',
    },
    {
      name: 'Haluk Aytış',
      role: 'Yazılım Geliştirici',
      imageUrl:
        'https://avatars.githubusercontent.com/u/125741378?v=4',
    },

    
  ]
  
  export default function Ekip() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ekibimizi Tanıyın {'➜'}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  