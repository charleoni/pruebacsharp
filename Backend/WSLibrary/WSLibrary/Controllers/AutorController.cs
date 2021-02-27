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
    public class AutorController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    var lst = db.Autores.OrderByDescending(d => d.IdAutor).ToList();
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
        public IActionResult Add(AutorRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    Autore oAutor = new Autore
                    {
                        NombreAutor = oModel.nombreAutor,
                        Ciudad = oModel.Ciudad,
                        Email = oModel.email,
                        FechaNace = oModel.FechaNace,                        
                    };
                    db.Autores.Add(oAutor);
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
        public IActionResult Edit(AutorRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    Autore oAutor = db.Autores.Find(oModel.Id);
                    oAutor.NombreAutor = oModel.nombreAutor;
                    oAutor.Ciudad = oModel.Ciudad;
                    oAutor.Email = oModel.email;                    
                    db.Entry(oAutor).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
                    Autore oAutor = db.Autores.Find(Id);
                    oAutor.Estado = false;
                    db.Entry(oAutor).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
