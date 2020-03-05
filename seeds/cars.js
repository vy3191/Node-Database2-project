
exports.seed = async function(knex) {
  await knex("cars").insert([
    {VIN:'12345VB-23-vb-c', make:'2016', model:'HONDA-CRV', mileage:'20,000', type:'manual', transmission:'new'},
    {VIN:'ACV-RT%-23-vb-c', make:'2012', model:'Toyota-CRV', mileage:'120,000', type:'auto', transmission:'new'}
  ])
};
