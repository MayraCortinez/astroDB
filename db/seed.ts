import { db, Todo, User, Category } from 'astro:db'; //importo las tablas

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([  		//aplico el método insert para agregar registros a las tablas
        {     
			id: 1,
			email: 'uno@gmail.com',
			username: 'uno',
		},
		{     
			id: 2,
			email: 'dos@gmail.com',
			username: 'dos',
		},
    ]);
	await db.insert(Category).values([
        {     
		    id: 1,
    		title: 'primera categoría',
    		description: 'categoría de prueba',
		},
		{     
		    id: 2,
    		title: 'segunda categoría',
    		description: 'categoría de prueba',
		},
    ]);
	await db.insert(Todo).values([
        {     
			id: 1,
			title: 'Primera tarea',
			description: 'Tarea asociada al primero usuario',
			user_id: 1,
			category_id: 1
		},
		{     
			id: 2,
			title: 'segunda tarea',
			description: 'segunda tarea',
			user_id: 2,
			category_id: 2
		},
    ]);
}
