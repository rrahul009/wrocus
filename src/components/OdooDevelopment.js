import React from 'react'

const OdooDevelopment = () => {
  const odooService = [
    {
      title: 'ODOO CONSULTANT',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpue2Z0AcmVne9J63Cri0kd2xEEEWaZuEK8garuL-viZMuC4rzUxBFLvz6ZhygbpcpZWc&usqp=CAU"
    },
    {
      title: 'Odoo Website Development',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://cdn-icons-png.flaticon.com/512/9364/9364669.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'odoo Consulting',
      description: 'Best when you want strategic guidance for your complex ERP projects, seek process optimization and resolve technical challenges. We have a team of technical, functional, and strategic Odoo consultants to help you step up and use Odoo to meet your business goals.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    }
  ]
  return (
    <div className='bg-gray-800 py-4 p-5 mt-4'>
      <div className='bg-white'>
        <p className='text-4xl text-center py-1  p-4 font-bold text-black'>Odoo Development Services We Offer</p>
        <p className='text-center mb-5'>We offer various Odoo ERP solutions and development services to help you take your digital transformation to the next level.</p>
        <div className='grid grid-cols-3 gap-4 p-4'>
          {
            odooService.map((item, id) => (
              <div key={id}>
                <div>
                  <p className='font-semibold'>{item.title}</p>
                  <div className='flex'>
                    <img
                      src={item.icon}
                      alt={item.title}
                    />

                  </div>
                  <p className='mt-2'>{item.description}</p>
                </div>
              </div>


            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OdooDevelopment
