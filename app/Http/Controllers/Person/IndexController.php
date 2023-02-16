<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name' => 'Kirill',
                'age' => 22,
                'job' => 'coder',
            ],
            [
                'id' => 2,
                'name' => 'Anna',
                'age' => 50,
                'job' => 'economic',
            ],
            [
                'id' => 3,
                'name' => 'Nastya',
                'age' => 20,
                'job' => 'guitar-teacher',
            ],
        ];

        return $persons;
    }
}
