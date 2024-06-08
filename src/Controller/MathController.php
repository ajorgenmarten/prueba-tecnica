<?php

namespace App\Controller;

use App\Service\MathService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MathController extends AbstractController
{
    private $mathService;

    public function __construct(MathService $mathService) {
        $this->mathService = $mathService;
    }


    #[Route('/sum/{a}/{b}', name: 'sum')]
    public function sum(int $a, int $b): Response
    {
        $result = $this->mathService->sum($a, $b);
        return new Response($result);
    }
}
