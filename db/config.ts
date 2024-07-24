import { defineDb, defineTable, column } from 'astro:db';

//Los datos en Astro DB se almacenan utilizando tablas SQL. 
//Las tablas estructuran tus datos en filas y columnas.
//Las columnas hacen cumplir el tipo de cada valor de fila. 

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    username: column.text({ unique: true }),
  }
})

const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text({}),
    description: column.text({}),
    user_id: column.number({ references: () => User.columns.id }),
    category_id: column.number({ references: () => Category.columns.id})
  }
})

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text({}),
    description: column.text({}),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: { User, Todo, Category}
});
