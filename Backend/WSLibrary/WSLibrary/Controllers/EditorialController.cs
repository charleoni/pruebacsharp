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
    public class EditorialController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    var lst = db.Editoriales.Where(x => x.Estado == true).OrderByDescending(d => d.IdEditorial).ToList();
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
        public IActionResult Add(EditorialRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    Editoriale oEditorial = new Editoriale
                    {
                        NombreEditorial = oModel.NombreEditorial,
                        Direccion = oModel.Direccion,
                        Telefono = oModel.Telefono,
                        Email = oModel.Email,
                        MaxLibrosRegistrados = oModel.MaxLibrosRegistrados
                    };
                    db.Editoriales.Add(oEditorial);
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
        public IActionResult Edit(EditorialRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (LibreriaContext db = new LibreriaContext())
                {
                    Editoriale oEditorial = db.Editoriales.Find(oModel.Id);
                    oEditorial.NombreEditorial = oModel.NombreEditorial;
                    oEditorial.Direccion = oModel.Direccion;
                    oEditorial.Telefono = oModel.Telefono;
                    oEditorial.Email = oModel.Email;
                    oEditorial.MaxLibrosRegistrados = oModel.MaxLibrosRegistrados;
                    db.Entry(oEditorial).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
                    Editoriale oEditorial = db.Editoriales.Find(Id);
                    oEditorial.Estado = false;
                    db.Entry(oEditorial).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
