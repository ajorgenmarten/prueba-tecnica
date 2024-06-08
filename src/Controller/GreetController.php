<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GreetController extends AbstractController
{
    public function index($name): Response
    {
        return new Response('Hello '.($name ?? 'World'));
    }
}
