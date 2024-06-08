<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GreetTest extends WebTestCase
{
    public function testSomething()
    {
       $client = static::createClient();
       $crawler = $client->request('GET', '/hello');

       $this->assertResponseIsSuccessful();
       $this->assertSelectorTextContains('body', 'Hello World');
    }

    public function testCustomGreet()
    {
       $client = static::createClient();
       $crawler = $client->request('GET', '/hello/alejandro');

       $this->assertResponseIsSuccessful();
       $this->assertSelectorTextContains('body', 'Hello alejandro');
    }
}
