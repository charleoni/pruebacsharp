USE [master]
GO
/****** Object:  Database [Libreria]    Script Date: 25/02/2021 11:52:54 p. m. ******/
CREATE DATABASE [Libreria]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Libreria', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Libreria.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Libreria_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Libreria_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Libreria] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Libreria].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Libreria] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Libreria] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Libreria] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Libreria] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Libreria] SET ARITHABORT OFF 
GO
ALTER DATABASE [Libreria] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Libreria] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Libreria] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Libreria] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Libreria] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Libreria] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Libreria] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Libreria] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Libreria] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Libreria] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Libreria] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Libreria] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Libreria] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Libreria] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Libreria] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Libreria] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Libreria] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Libreria] SET RECOVERY FULL 
GO
ALTER DATABASE [Libreria] SET  MULTI_USER 
GO
ALTER DATABASE [Libreria] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Libreria] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Libreria] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Libreria] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Libreria] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Libreria] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Libreria', N'ON'
GO
ALTER DATABASE [Libreria] SET QUERY_STORE = OFF
GO
USE [Libreria]
GO
/****** Object:  Table [dbo].[Autores]    Script Date: 25/02/2021 11:52:55 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Autores](
	[idAutor] [int] IDENTITY(1,1) NOT NULL,
	[nombreAutor] [varchar](100) NOT NULL,
	[Ciudad] [varchar](50) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[FechaNace] [date] NULL,
	[estado] [bit] NULL,
	[CreatedAt] [int] NULL,
	[CreatedAtdate] [datetime] NOT NULL,
	[updatedAt] [int] NULL,
	[updatedAtdate] [datetime] NULL,
 CONSTRAINT [PK_Autores] PRIMARY KEY CLUSTERED 
(
	[idAutor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Editoriales]    Script Date: 25/02/2021 11:52:55 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Editoriales](
	[idEditorial] [int] IDENTITY(1,1) NOT NULL,
	[nombreEditorial] [varchar](100) NOT NULL,
	[Direccion] [varchar](200) NOT NULL,
	[Telefono] [varchar](50) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[maxLibrosRegistrados] [int] NOT NULL,
	[estado] [bit] NULL,
	[createdAt] [int] NULL,
	[createdAtdate] [datetime] NOT NULL,
	[updatedAt] [int] NULL,
	[updatedAtdate] [datetime] NULL,
 CONSTRAINT [PK_Editoriales] PRIMARY KEY CLUSTERED 
(
	[idEditorial] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Libros]    Script Date: 25/02/2021 11:52:55 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Libros](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Titulo] [varchar](100) NOT NULL,
	[Agno] [int] NOT NULL,
	[Genero] [varchar](50) NOT NULL,
	[NumPaginas] [int] NOT NULL,
	[idEditorial] [int] NOT NULL,
	[idAutor] [int] NOT NULL,
	[estado] [bit] NULL,
	[createdAt] [int] NULL,
	[ceatedAtdate] [datetime] NOT NULL,
	[updatedAt] [int] NULL,
	[updatedAtdate] [datetime] NULL,
 CONSTRAINT [PK_Libros] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 25/02/2021 11:52:55 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[password] [varchar](100) NOT NULL,
	[nombre] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Autores] ON 

INSERT [dbo].[Autores] ([idAutor], [nombreAutor], [Ciudad], [email], [FechaNace], [estado], [CreatedAt], [CreatedAtdate], [updatedAt], [updatedAtdate]) VALUES (1, N'Gabriel Garcia Marquez', N'Aracataca', N'Gabriel@garcia.com', CAST(N'1962-09-23' AS Date), 1, NULL, CAST(N'2021-02-25T16:59:49.783' AS DateTime), NULL, NULL)
INSERT [dbo].[Autores] ([idAutor], [nombreAutor], [Ciudad], [email], [FechaNace], [estado], [CreatedAt], [CreatedAtdate], [updatedAt], [updatedAtdate]) VALUES (2, N'Vargas Llosa', N'Arequipa', N'vargas@llosa.com', CAST(N'1971-09-23' AS Date), 0, NULL, CAST(N'2021-02-25T17:10:06.753' AS DateTime), NULL, NULL)
INSERT [dbo].[Autores] ([idAutor], [nombreAutor], [Ciudad], [email], [FechaNace], [estado], [CreatedAt], [CreatedAtdate], [updatedAt], [updatedAtdate]) VALUES (3, N'picaso de la mancha', N'italia adi', N'correo@corre.com', CAST(N'2021-02-03' AS Date), 0, NULL, CAST(N'2021-02-25T20:02:56.723' AS DateTime), NULL, NULL)
INSERT [dbo].[Autores] ([idAutor], [nombreAutor], [Ciudad], [email], [FechaNace], [estado], [CreatedAt], [CreatedAtdate], [updatedAt], [updatedAtdate]) VALUES (4, N'pedro', N'caracas', N'sdac@gmail.com', CAST(N'2021-02-02' AS Date), 1, NULL, CAST(N'2021-02-25T23:01:33.870' AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[Autores] OFF
GO
SET IDENTITY_INSERT [dbo].[Editoriales] ON 

INSERT [dbo].[Editoriales] ([idEditorial], [nombreEditorial], [Direccion], [Telefono], [email], [maxLibrosRegistrados], [estado], [createdAt], [createdAtdate], [updatedAt], [updatedAtdate]) VALUES (41, N'Rocio Alcalá', N'La floresta', N'987654', N'velave@vela.com.co', 9, 1, NULL, CAST(N'2021-02-25T11:18:48.423' AS DateTime), NULL, NULL)
INSERT [dbo].[Editoriales] ([idEditorial], [nombreEditorial], [Direccion], [Telefono], [email], [maxLibrosRegistrados], [estado], [createdAt], [createdAtdate], [updatedAt], [updatedAtdate]) VALUES (42, N'Daniel Oslo', N'El bolsillo', N'123456', N'correo@correo.com.co', 3, 1, NULL, CAST(N'2021-02-25T11:20:53.873' AS DateTime), NULL, NULL)
INSERT [dbo].[Editoriales] ([idEditorial], [nombreEditorial], [Direccion], [Telefono], [email], [maxLibrosRegistrados], [estado], [createdAt], [createdAtdate], [updatedAt], [updatedAtdate]) VALUES (43, N'Charle King', N'Boston', N'654321', N'comoasi@comosi.com.co', 12, 0, NULL, CAST(N'2021-02-25T11:20:53.880' AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[Editoriales] OFF
GO
SET IDENTITY_INSERT [dbo].[Libros] ON 

INSERT [dbo].[Libros] ([id], [Titulo], [Agno], [Genero], [NumPaginas], [idEditorial], [idAutor], [estado], [createdAt], [ceatedAtdate], [updatedAt], [updatedAtdate]) VALUES (11, N'El coronel no tiene quien le escriba', 1971, N'Literarioy y terror', 356, 42, 1, 0, NULL, CAST(N'2021-02-25T21:27:56.997' AS DateTime), NULL, NULL)
INSERT [dbo].[Libros] ([id], [Titulo], [Agno], [Genero], [NumPaginas], [idEditorial], [idAutor], [estado], [createdAt], [ceatedAtdate], [updatedAt], [updatedAtdate]) VALUES (12, N'La mala hora', 1971, N'Literario', 356, 42, 1, 0, NULL, CAST(N'2021-02-25T21:29:09.160' AS DateTime), NULL, NULL)
INSERT [dbo].[Libros] ([id], [Titulo], [Agno], [Genero], [NumPaginas], [idEditorial], [idAutor], [estado], [createdAt], [ceatedAtdate], [updatedAt], [updatedAtdate]) VALUES (13, N'hitcoch', 1968, N'terror', 36, 42, 1, 1, NULL, CAST(N'2021-02-25T23:34:38.510' AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[Libros] OFF
GO
ALTER TABLE [dbo].[Autores] ADD  CONSTRAINT [DF_Autores_estado]  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[Autores] ADD  CONSTRAINT [DF_Autores_CreatedAtdate]  DEFAULT (getdate()) FOR [CreatedAtdate]
GO
ALTER TABLE [dbo].[Editoriales] ADD  CONSTRAINT [DF_Editoriales_estado]  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[Editoriales] ADD  CONSTRAINT [DF_Editoriales_createdAtdate]  DEFAULT (getdate()) FOR [createdAtdate]
GO
ALTER TABLE [dbo].[Libros] ADD  CONSTRAINT [DF_Libros_estado]  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[Libros] ADD  CONSTRAINT [DF_Libros_ceatedAtdate]  DEFAULT (getdate()) FOR [ceatedAtdate]
GO
ALTER TABLE [dbo].[Libros]  WITH CHECK ADD  CONSTRAINT [FK_Libros_Autores1] FOREIGN KEY([idAutor])
REFERENCES [dbo].[Autores] ([idAutor])
GO
ALTER TABLE [dbo].[Libros] CHECK CONSTRAINT [FK_Libros_Autores1]
GO
ALTER TABLE [dbo].[Libros]  WITH CHECK ADD  CONSTRAINT [FK_Libros_Editoriales] FOREIGN KEY([idEditorial])
REFERENCES [dbo].[Editoriales] ([idEditorial])
GO
ALTER TABLE [dbo].[Libros] CHECK CONSTRAINT [FK_Libros_Editoriales]
GO
USE [master]
GO
ALTER DATABASE [Libreria] SET  READ_WRITE 
GO
