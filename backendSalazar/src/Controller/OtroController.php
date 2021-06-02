<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Otro;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;



class OtroController extends AbstractController
{
   
    /**
     * @Route("/otros", name="get_otros", methods={"GET"})
     */
    public function getOtros(): JsonResponse {
        $repositorio = $this->getDoctrine()->getRepository(Otro::class);
        $otros = $repositorio->findAll();
        $data = [];
        foreach ($otros as $otro) {
           
            $data[] = [
                'id' => $otro->getId(),
                'nombre' => $otro->getNombre(),
                'direccion' => $otro->getDireccion(),
                'localidad' => $otro->getLocalidad(),
                'telefono' => $otro->getTelefono(),
                'latitud' => $otro->getLatitud(),
                'longitud' => $otro->getLongitud()
            ];
        }

       
        return new JsonResponse($data, Response::HTTP_OK);
    }
}
