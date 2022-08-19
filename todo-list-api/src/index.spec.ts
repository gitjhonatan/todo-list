//import request from 'supertest'
import App from './configs/app'
import * as request from 'supertest'

describe('Testando o CRUD', () => {
  const desc_ins = 'insercao'
  const desc_upd = 'atualizacao'
  const express_app = App.create()

  let tarefa;
  test('Testando Inserção', async () => {
    const res = await request(express_app).post('/api/task').send({
      desc: desc_ins
    })

    tarefa = res.body

    expect(tarefa._id).not.toBeNull()
    expect(tarefa._id).not.toBeUndefined()
    expect(tarefa.desc).toEqual(desc_ins)
  });

  test('Testando Atualização', async () => {
    tarefa.desc = desc_upd
    const res = await request(express_app).put('/api/task').send(tarefa)

    expect(res.body.modifiedCount).toEqual(1)
    expect(res.body.matchedCount).toEqual(1)
  });

  test('Testando Deleção', async () => {
    const res = await request(express_app).delete('/api/task').send({ id: tarefa._id })
    expect(res.body.deletedCount).toEqual(1)
    // expect(res.body._id).not.toBeNull()
    // expect(res.body._id).not.toBeUndefined()
    // expect(res.body.desc).toEqual(desc_upd)
  });


});
