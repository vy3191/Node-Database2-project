
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.integer("id").notNull().unique().primary();
    table.text("VIN").notNull().unique();
    table.text('make').notNull();
    table.text("model").notNull();
    table.text('mileage').notNull();
    table.text('type')
    table.text('transmission')
});
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
};
