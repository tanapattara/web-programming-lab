<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');             
            $table->string('email')->unique();           
            $table->integer('edu_year');
            $table->string('student_id');
            $table->unsignedBigInteger('major_id');
            $table->foreign('major_id')->references('id')->on('major');
            $table->string('position')->nullable();
            $table->string('company')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member');
    }
}
