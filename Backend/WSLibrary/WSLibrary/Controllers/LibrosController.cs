using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WSLibrary.Models;
using WSLibrary.Models.Request;
using WSLibrary.Models.Response;

namespace WSLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibrosController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    var lst = db.Libros.OrderByDescending(d => d.IdAutor).ToList();
                    oRespuesta.Exito = 1;
                    oRespuesta.Data = lst;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        [HttpPost]
        public IActionResult Add(LibrosRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    Libro oLibros = new Libro
                    {
                        Titulo = oModel.Titulo,
                        Agno = oModel.Agno,
                        Genero = oModel.genero,
                        NumPaginas = oModel.numPaginas,
                        IdEditorial = oModel.idEditorial,
                        IdAutor = oModel.idAutor,
                    };
                    db.Libros.Add(oLibros);
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                }

            }
            catch (Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        [HttpPut]
        public IActionResult Edit(LibrosRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    Libro oLibros = db.Libros.Find(oModel.Id);
                    oLibros.Titulo = oModel.Titulo;
                    oLibros.Agno = oModel.Agno;
                    oLibros.Genero = oModel.genero;
                    oLibros.NumPaginas = oModel.numPaginas;
                    oLibros.IdEditorial = oModel.idEditorial;
                    oLibros.IdAutor = oModel.idAutor;
                    db.Entry(oLibros).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                //using (LibreriaContext db = new LibreriaContext())
                //{
                //    Editoriale oEditorial = db.Editoriales.Find(Id);
                //    db.Remove(oEditorial);
                //    db.SaveChanges();
                //    oRespuesta.Exito = 1;
                //}

                using (LibreriaContext db = new LibreriaContext())
                {
                    Libro oLibros = db.Libros.Find(Id);
                    oLibros.Estado = false;
                    db.Entry(oLibros).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                }

            }
            catch (Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }
    }
}
