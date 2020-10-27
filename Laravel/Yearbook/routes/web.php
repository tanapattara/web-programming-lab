<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/members', 'memberController@getMembers');
Route::get('/members/{id}', 'memberController@getMemberByID');
Route::get('/member_new', 'memberController@newMember');
Route::post('/member.edit', 'memberController@editMember')->name('member.edit');
Route::post('/member.create', 'memberController@createNewMember')->name('member.create');
Route::post('/member.delete', 'memberController@deleteMember')->name('member.delete');


