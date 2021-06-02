<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use App\Entity\Sala;
use DateTime;


class SalaController extends AbstractController
{
   
    /**
     * @Route("/salas", name="get_salas", methods={"GET"})
     */
    public function getSalas(): JsonResponse {
        $repositorio = $this->getDoctrine()->getRepository(Sala::class);
        $salas = $repositorio->findAll();
        $data = [];
        foreach ($salas as $sala) {
           
            $data[] = [
                'id' => $sala->getId(),
                'estado' => $sala->getEstado()
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }

}
