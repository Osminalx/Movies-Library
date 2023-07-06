export interface Movie {
    _id:               string;
    name:              string;
    genero:            string;
    fecha_publicacion: Date;
    img:               string;
    link:              string;
    sipnosis:          string;
    liked:             boolean;
}

export interface FormValues {
    name:              string;
    genero:            string;
    fecha_publicacion: Date;
    img:               string;
    link:              string;
    sipnosis:          string;
    liked:             boolean;
}