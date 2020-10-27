@extends('layouts.app')

@section('content')
<div class="container">
    <div class="justify-content-center">
	<form method="POST" action="{{ route('member.create') }}">
        @csrf
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('ชื่อ') }}</label>
            <div class="col-md-6">
                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="" required autocomplete="name" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="lastname" class="col-md-4 col-form-label text-md-right">{{ __('นามสกุล') }}</label>
            <div class="col-md-6">
                <input id="lastname" type="text" class="form-control @error('lastname') is-invalid @enderror" name="lastname" value="" required autocomplete="lastname" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('อีเมล') }}</label>
            <div class="col-md-6">
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="" required autocomplete="email" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="eduyear" class="col-md-4 col-form-label text-md-right">{{ __('ปีการศึกษา') }}</label>
            <div class="col-md-6">
                <input id="eduyear" type="number" class="form-control @error('eduyear') is-invalid @enderror" name="eduyear" value="" required autocomplete="eduyear" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="stuid" class="col-md-4 col-form-label text-md-right">{{ __('รหัสนักศึกษา') }}</label>
            <div class="col-md-6">
                <input id="stuid" type="text" class="form-control @error('stuid') is-invalid @enderror" name="stuid" value="" required autocomplete="stuid" autofocus>
            </div>
        </div>
        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    {{ __('สร้างข้อมูลนักศึกษาใหม่') }}
                </button>
            </div>
        </div>
    </form> 
    </div>
</div>
@endsection