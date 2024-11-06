package com.store.web.app.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.web.app.models.entity.PhysicalProduct;

public interface PhysicalProductDao extends JpaRepository<PhysicalProduct, Long> {

}
